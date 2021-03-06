import { IApiKey } from '../../../src/database/model/ApiKey';

export const API_KEY = 'abc';

export const mockFindApiKey = jest.fn(async (key: string) => {
	if (key == API_KEY) return <IApiKey>{ key: API_KEY };
	else return null;
});

jest.mock('../../../src/database/repository/ApiKeyRepo', () => ({
	get findByKey() { return mockFindApiKey; }
}));