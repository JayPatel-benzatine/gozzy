import { selector } from "recoil";
import axios from "axios";
import { headerList } from './Atom'

const url1 = `http://ecommerceapi.benzatine.com/public/api/special_product`;
const fetchUserData = selector({
  key: "fetchUserData",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url1);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
});

const url2 = `http://ecommerceapi.benzatine.com/public/api/category`;
const categoreyLists = selector({
  key: "categoreyLists",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url2);
      return response.data.data;

    } catch (error) {
      throw error;
    }
  }
});

const url3 = `http://ecommerceapi.benzatine.com/public/api/offer`;
const TrendOfferLists = selector({
  key: "TrendOfferLists",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url3);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
});

const url4 = `http://ecommerceapi.benzatine.com/public/api/slider`;
const SliderLists = selector({
  key: "SliderLists",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url4);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
});

const url5 = `http://ecommerceapi.benzatine.com/public/api/product_filter`;
const ShopfilterLists = selector({
  key: "ShopfilterLists",
  get: async ({ get }) => {
    try {
      const data = get(headerList)
      const response = await axios.post(url5, data)
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
});


const url6 = `http://ecommerceapi.benzatine.com/public/api/allCategory_list`;
const ShopCategoryLists = selector({
  key: "ShopCategoryLists",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url6);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
});

const url7 = `http://ecommerceapi.benzatine.com/public/api/variant`;
const ShopColorLists = selector({
  key: "ShopColorLists",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url7);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
});

const url8 = `http://ecommerceapi.benzatine.com/public/api/user-address`;
const AddressListsData = selector({
  key: "AddressListsData",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url8);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
});



export {
  fetchUserData, categoreyLists, TrendOfferLists,
  SliderLists, ShopfilterLists, ShopCategoryLists,
  ShopColorLists, AddressListsData
}
