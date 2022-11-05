import { Cases } from "./cases.model";
import { Deaths } from "./deaths.model";
import { Tests } from "./tests.model";

export interface Response {
    continent: string;
    country: string;
    population: number;
    cases: Cases,
    deaths: Deaths,
    tests: Tests,
    day: string | null,
    time: string | null

    code?: string;
    emoji?: string;
    unicode?: string;
    image?: string;
    name?: string;
}