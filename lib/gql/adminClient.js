import { createClient } from 'urql';
const client = createClient({
	url: 'https://databackend.lachlankemp.com/v1/graphql',
	fetchOptions: () => {
		return {
			headers: { 'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET ? `${process.env.HASURA_ADMIN_SECRET}` : '' },
		};
	},
});
export default client;