import { buildRoute } from "../builders/navigation.builder";
import { buildStackNavigation } from "../builders/navigation.builder";

describe("Navigation Builders", () => {
  describe("buildRoute", () => {
    it("should build a route object with default values", () => {
      const route = buildRoute();
      expect(route).toEqual({
        key: "",
        name: "",
        params: {},
      });
    });

    it("should build a route object with overridden values", () => {
      const overrides = {
        name: "Home",
        params: { id: 1 },
      };
      const route = buildRoute(overrides);
      expect(route).toEqual({
        key: "",
        name: "Home",
        params: { id: 1 },
      });
    });
  });

  describe("buildStackNavigation", () => {
    it("should build a stack navigation object with default values", () => {
      const navigation = buildStackNavigation();
      expect(navigation).toBeDefined();
    });
  });
});
