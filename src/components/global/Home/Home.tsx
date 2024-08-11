import React, { useCallback, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ListRenderItem, View, FlatList } from "react-native";

import styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";
import { useFetchProducts } from "services/finance.service.hooks";
import { FinanceProduct } from "types/product.types";
import { renderPlaceholders, searchByText } from "utils/common.utils";
import useProductStore from "stores/product.store";
import { RootNavigatorPropList } from "navigation/Navigator.types";
import Product from "components/Product/Product";
import EmptyState from "components/global/EmptyState/EmptyState";
import Search from "components/Search/Search";
import Button from "components/global/Button/Button";

const Home: React.FC<Props> = (props) => {
  const fetchProducts = useFetchProducts();
  const { data, isError, isFetching, isSuccess, error } = fetchProducts;
  const { refetch } = fetchProducts;
  const setSelectedProduct = useProductStore(
    (state) => state.setSelectedProduct
  );
  const [searchText, setSearchText] = useState("");
  const { navigate } = useNavigation<RootNavigatorPropList>();

  const results = useMemo(() => {
    if (!searchText) return data;
    if (!data) return [];
    return searchByText(data, searchText);
  }, [data, searchText]);
  const productsLength = !!results?.length;
  const errorMessage = error ? error.message : "";

  const addProduct = () => {
    setSelectedProduct(undefined);
    navigate("ProductForm");
  };

  const refetchProducts = async () => {
    await refetch();
  };

  const renderStates = () => {
    if (isFetching) {
      return <View style={styles.placeholder}>{renderPlaceholders(7)}</View>;
    }

    if (isError) {
      return <EmptyState title={errorMessage} onPress={refetchProducts} />;
    }

    if (isSuccess) return <EmptyState onPress={refetchProducts} />;
    return null;
  };

  const renderItem: ListRenderItem<FinanceProduct> = useCallback((list) => {
    const { item } = list;
    return <Product product={item} />;
  }, []);

  const renderItemMemoized = useMemo(() => renderItem, [renderItem]);

  return (
    <View style={styles.container}>
      <Search text={searchText} setText={setSearchText} />
      <FlatList
        bounces={productsLength}
        data={results}
        renderItem={renderItemMemoized}
        ListEmptyComponent={renderStates}
        contentContainerStyle={styles.contentContainer}
        refreshing={isFetching}
        keyExtractor={(_item, index) => index.toString()}
      />
      <Button title="Agregar" onPress={addProduct} />
    </View>
  );
};

export default Home;
