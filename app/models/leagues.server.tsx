import { prisma } from "../db.server";


export async function getLeagues() {
	return prisma.leagues.findMany();
}
