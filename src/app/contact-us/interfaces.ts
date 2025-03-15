export interface LeadDetails {
	user_name: string;
	user_email: string;
	company_name: string;
	domain_authority: string;
	domain_rating: string;
	organic_traffic: string;
	need_content: string;
	hunting_for: string;
	traffice_source: string;
	message: string;
}

export interface HackedUserInfo {
	ipAddress?: string;
	userAgent?: string;
	screenResolution?: string;
	timeZone?: string;
	referrer?: string;
	cookies?: Record<string, string>;
};
