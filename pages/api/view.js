import client from "../../lib/gql/adminClient";
export default async function addView(req, res) {

	const query = await client.query(`
		query CheckPage {
			pages(where: {pagePath: {_eq: "${req.query.path}"}}) {
				pagePath
				views
			}
		}
	`).toPromise();
	if (query.data.pages.length === 0) {
		const addPage = await client.mutation(`
		mutation CreatePage {
				insert_pages_one(object: {pagePath: "${req.query.path}"}) {
					pagePath
					views
				}
			}
		
		`).toPromise();
		return res.status(200).json({pageViews: addPage.data.insert_pages_one.views});

	} else {
		const incrementPage = await client.mutation(`
			mutation IncrementPage {
				update_pages(where: {pagePath: {_eq: "${req.query.path}"}}, _inc: {views: "1"}) {
					affected_rows
					returning {
						views
					}
				}
			}
		`).toPromise();
		return res.status(200).json({ pageViews: incrementPage.data.update_pages.returning[0].views});
	}
};
