import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getLeagues } from "../../models/leagues.server";

type LoaderData = {
	leagues: Awaited<ReturnType<typeof getLeagues>>;
}

export const loader: LoaderFunction = async () => {
	const leagues = await getLeagues();
	return json<LoaderData>({ leagues });
}
export default function LeaguesRoute() {
	const {leagues} = useLoaderData<LoaderData>();
	return (
		<main>
			<h1>Leagues</h1>
			<ul>
				{leagues.map((league) => (
					<li key={league.id}>{league.leagueName}</li>
				))}
			</ul>
		</main>
	)
}
