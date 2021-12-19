export interface instagramShortToken {
  access_token: string;
  user_id: number;
}

export interface instagramLongToken {
  access_token: string;
  token_type: "bearer";
  expires_in: number;
}

export interface instagramUserField {
  id: number;
  username: string;
}
