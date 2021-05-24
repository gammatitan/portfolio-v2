import { ApiBaseUrl } from '../domain/request';

export const API_BASE_URL: ApiBaseUrl = process.env.API_BASE_URL || '';

export const ENDPOINTS = {
  EVENTS_GARDEN_PARTY_2021: `${API_BASE_URL}/api/events/garden-party-2021`,
};
