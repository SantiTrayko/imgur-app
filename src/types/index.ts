export interface GalleryImage {
  id: string;
  title: null | string;
  description: null | string;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  vote: null | string;
  favorite: boolean;
  nsfw: null | boolean;
  section: null | string;
  account_url: null | string;
  account_id: null | number;
  is_ad: boolean;
  in_most_viral: boolean;
  has_sound: boolean;
  tags: string[];
  ad_type: number;
  ad_url: string;
  edited: string;
  in_gallery: boolean;
  link: string;
  mp4_size: number;
  mp4: string;
  gifv: string;
  hls: string;
  processing: {
    status: string;
  };
  comment_count: null | number;
  favorite_count: null | number;
  ups: null | number;
  downs: null | number;
  points: null | number;
  score: null | number;
}

export interface GalleryData {
  id: string;
  title: string;
  description: null | string;
  datetime: number;
  cover: string;
  cover_width: number;
  cover_height: number;
  account_url: string;
  account_id: number;
  privacy: string;
  layout: string;
  views: number;
  link: string;
  ups: number;
  downs: number;
  points: number;
  score: number;
  is_album: boolean;
  vote: null | string;
  favorite: boolean;
  nsfw: boolean;
  section: string;
  comment_count: number;
  favorite_count: number;
  images_count: number;
  in_gallery: boolean;
  is_ad: boolean;
  tags: string[];
  ad_type: number;
  ad_url: string;
  in_most_viral: boolean;
  include_album_ads: boolean;
  images: GalleryImage[];
  ad_config: {
    safeFlags: string[];
    highRiskFlags: string[];
    unsafeFlags: string[];
    wallUnsafeFlags: string[];
    showsAds: boolean;
    showAdLevel: number;
    safe_flags: string[];
    high_risk_flags: string[];
    unsafe_flags: string[];
    wall_unsafe_flags: string[];
    show_ads: boolean;
    show_ad_level: number;
    nsfw_score: number;
  };
}

export interface GalleryFilters {
  section: string;
  sort: string;
  window: string;
}

export interface GalleryFullFilters extends GalleryFilters {
  page: number;
}

export interface ApiResponse<T> {
  data: T[];
  status: string;
  success: boolean;
}
