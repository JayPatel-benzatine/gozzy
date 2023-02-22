import axios from "axios";


// return the token from the session storage
export const getUserId = () => {
  return localStorage.getItem("user") || null;
};
export const getToken = () => {
  return localStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

// curd for cart

export const cart_data = async (Cdata) => {
  try {
    const token = getToken();
    await axios(
      {
        method: 'post',
        url: 'http://ecommerceapi.benzatine.com/public/api/cart',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: Cdata,
      }
    );
  } catch (error) {
    return error.response;
  }

}

export const cart_data_Put = async (Cdata) => {
  try {
    const token = getToken();
    await axios(
      {
        method: 'put',
        url: `http://ecommerceapi.benzatine.com/public/api/cart/${Cdata.id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: { no_qtn: Cdata.no_qtn },
      }
    );
  } catch (error) {
    return error.response;
  }

}

export const cart_data_Del = async (Cdata) => {
  try {
    const token = getToken();
    await axios(
      {
        method: 'delete',
        url: `http://ecommerceapi.benzatine.com/public/api/cart/${Cdata.id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    return;
  } catch (error) {
    return error.response;
  }

}

export const cart_data_Get = async () => {
  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'get',
        url: 'http://ecommerceapi.benzatine.com/public/api/cartList',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    let datas = res.data.data;
    return datas;
  } catch (error) {
    return error.response;
  }

}

export const cart_data_get = async (setcart) => {
  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'get',
        url: 'http://ecommerceapi.benzatine.com/public/api/cartList',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    let datas = res.data.data;
    return setcart(datas);
  } catch (error) {
    return error.response;
  }

}


// curd for wishlist

export const wishlist_data = async (Cdata) => {
  try {
    const token = getToken();
    await axios(
      {
        method: 'post',
        url: 'http://ecommerceapi.benzatine.com/public/api/wishlist',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: Cdata,
      }
    );
  } catch (error) {
    return error.response;
  }

}

export const wishlist_data_Get = async () => {
  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'get',
        url: 'http://ecommerceapi.benzatine.com/public/api/userWishlist',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    let datas = res.data.data;

    return datas;
  } catch (error) {
    return error.response;
  }

}
export const wishlist_data_get = async (setcart) => {
  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'get',
        url: 'http://ecommerceapi.benzatine.com/public/api/userWishlist',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    let datas = res.data.data;

    return setcart(datas);
  } catch (error) {
    return error.response;
  }

}

export const wishlist_data_Del = async (Cdata) => {
  try {
    const token = getToken();
    await axios(
      {
        method: 'delete',
        url: `http://ecommerceapi.benzatine.com/public/api/wishlist/${Cdata.id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    return;
  } catch (error) {
    return error.response;
  }

}


// order apis

export const order_data_get = async (setorder) => {
  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'get',
        url: 'http://ecommerceapi.benzatine.com/public/api/order_history',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    let datas = res.data.data;
    return setorder(datas);
  } catch (error) {
    return error.response;
  }

}

export const order_data_Put = async (Cdata) => {
  try {
    const token = getToken();
    await axios(
      {
        method: 'put',
        url: `http://ecommerceapi.benzatine.com/public/api/order-item/${Cdata}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: { product_status: "Cancelled" },
      }
    );
  } catch (error) {
    return error.response;
  }

}

// insert update del bank profile

export const Bank_data_Post = async (Cdata) => {
  try {
    const token = getToken();
    await axios(
      {
        method: 'post',
        url: `http://ecommerceapi.benzatine.com/public/api/bank-details`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: Cdata,
      }
    );

  } catch (error) {
    return error.response;
  }

}

export const Bank_data_get = async (setdetails) => {
  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'get',
        url: 'http://ecommerceapi.benzatine.com/public/api/userBankDetail',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    let datas = res.data.data;
    return setdetails(datas);
  } catch (error) {
    return error.response;
  }

}

export const Bank_data_Put = async (daata, setdata) => {

  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'put',
        url: `http://ecommerceapi.benzatine.com/public/api/bank-details/${daata.id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: daata,
      }

    );
    setdata(res.data.data)
  } catch (error) {
    return error.response;
  }

}


export const file_data_Post = async (Cdata, rstate) => {
  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'post',
        url: ` http://ecommerceapi.benzatine.com/public/api/file_upload`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: Cdata,
      }
    );
    rstate(res.data.data)
  } catch (error) {
    alert('Please Upload Image Again !!')
    return error.response;
  }
}



export const Address_data_get = async (setdetails) => {
  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'get',
        url: 'http://ecommerceapi.benzatine.com/public/api/user-address',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    let datas = res.data.data;

    return setdetails(datas);

  } catch (error) {
    return error.response;
  }

}


export const Address_data_Put = async (daata, setdata) => {

  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'put',
        url: `http://ecommerceapi.benzatine.com/public/api/user-address/${daata.id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: daata,
      }

    );
    setdata(res.data.data)

  } catch (error) {
    return error.response;
  }

}


// register userdetails 
export const user_data_Put = async (daata, id) => {

  try {
    const token = getToken();
    let res = await axios(
      {
        method: 'put',
        url: `http://ecommerceapi.benzatine.com/public/api/user/${id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        data: daata,
      }

    );

  } catch (error) {
    return error.response;
  }

}

export const user_data_get = async (setdetails) => {
  try {
    const token = getToken();
    const id = localStorage.getItem('user');

    let res = await axios(
      {
        method: 'get',
        url: `http://ecommerceapi.benzatine.com/public/api/user/${id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    let datas = res.data.data;

    return setdetails(datas);
  } catch (error) {
    return error.response;
  }

}
