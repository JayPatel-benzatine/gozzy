import { atom } from 'recoil'

const specialProduct = atom({
    key: 'specialProduct',
    default: []
});

const filterProduct = atom({
    key: 'filterProduct',
    default: []
});
const categoreyList = atom({
    key: 'categoreyList',
    default: []
});
const TrendOfferList = atom({
    key: 'TrendOfferList',
    default: [],
});
const SliderList = atom({
    key: 'SliderList',
    default: [],
});
const FilterProductList = atom({
    key: 'FilterProductList',
    default: [],
});
const OriginalPrice = atom({
    key: 'OriginalPrice',
    default: [],
});
const LoginResponce = atom({
    key: 'LoginResponce',
    default: [],
});
const AddressList = atom({
    key: 'AddressList',
    default: [],
});

const TotalPrice = atom({
    key: 'TotalPrice',
    default: [],
});
const CartItem = atom({
    key: 'CartItem',
    default: [],
});
const WishlistItem = atom({
    key: 'WishlistItem',
    default: [],
});



const headerList = atom({
    key: 'headerList',
    default: {
        priceRang1: '0',
        priceRang2: '5000',
    }
});

const UserProfile = atom({
    key: 'UserProfile',
    default: [],
});

const OrderDetails = atom({
    key: 'OrderDetails',
    default: [],
});
const TrackItems = atom({
    key: 'TrackItems',
    default: [],
});
const UserDetails = atom({
    key: 'UserDetails',
    default: [],
});
const ProfileDetails = atom({
    key: 'ProfileDetails',
    default: [],
});
const AddressUserDetails = atom({
    key: 'AddressUserDetails',
    default: [],
});
const AddresDetails = atom({
    key: 'AddresDetails',
    default: {
        user_id:'', full_name: "",
        phone: "", house_no: "",
        street: "", landmark: "",
        pin_code: "", isdefault: "0"
    },
});



export {
    specialProduct, filterProduct, categoreyList,
    TrendOfferList, SliderList, FilterProductList, headerList,
     OriginalPrice,LoginResponce,AddressList,TotalPrice,CartItem,
     UserProfile,WishlistItem,OrderDetails,TrackItems,UserDetails,AddressUserDetails,
     AddresDetails,ProfileDetails
};