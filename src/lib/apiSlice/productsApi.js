import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { data } from 'react-router-dom';

const productsApi = createApi({
	reducerPath: 'productsapi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL || process?.env?.VITE_BASE_URL,
		headers: {
			'Content-Type': 'application/json',
		},
	}),
	endpoints: build => ({
		getAll: build.query({
			query: skip => `products?limit=10&skip=${skip}`,
		}),
		getById: build.query({
			query: id => `products/${id}`,
		}),
		addProduct: build.mutation({
			query: data => ({
				method: 'POST',
				url: `/products/add`,
				body: JSON.stringify(data),
			}),
		}),
		searchProducts: build.mutation({
			query: data =>
				`/products/search/?q=${data.q}&limit=10&skip=${data.pageS}`,
		}),
		getAllCategories: build.query({
			query: () => '/product/category-list',
		}),
		getProductsByCategory: build.query({
			query: data => `/product/category/${data.category}/?limit=10&skip=${data.page}`
		})
	}),
});

export const {
	useGetProductsByCategoryQuery,
	useGetAllQuery,
	useSearchProductsMutation,
	useGetByIdQuery,
	useAddProductMutation,
	useGetAllCategoriesQuery,
} = productsApi;
export default productsApi;
