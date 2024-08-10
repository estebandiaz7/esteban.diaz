import React, { useCallback } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";

import styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";
import { useFetchProducts } from "../../../services/finance.service.hooks";
import EmptyState from "../EmptyState/EmptyState";
import { FinanceProduct } from "../../../types/product.types";
import { renderPlaceholders } from "../../../utils/common.utils";

const Home: React.FC<Props> = (props) => {
  const { data, isError, isFetching, isSuccess, error, refetch } =
    useFetchProducts();
  const errorMessage = error ? error.message : "";

  const refetchProducts = async () => {
    await refetch();
  };

  const renderEmptyState = () => {
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
    const { id, name } = item;
    return (
      <View style={styles.containerCoupon}>
        <Text style={styles.titlePost}>{name}</Text>
        <Text style={styles.titlePost}>{id}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={styles.contentContainer}
        refreshing={isFetching}
      />
    </View>
  );
};

export default Home;
