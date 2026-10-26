import { siteConfig } from "@/config/site";
import { courses, type Course } from "@/content/courses";
import { posts, type Post } from "@/content/posts";
import { services, type Service } from "@/content/services";
import { mergeCopy } from "./merge";
import { courseOverlays } from "./overlays/courses";
import { postOverlays } from "./overlays/posts";
import { serviceOverlays } from "./overlays/services";
import { siteOverlays } from "./overlays/site";
import { isLocale, type Locale } from "./routing";

function localeOf(value: string): Locale {
  return isLocale(value) ? value : "en";
}

export function localizeSite(locale: string) {
  const loc = localeOf(locale);
  if (loc === "en") {
    return siteConfig;
  }
  return mergeCopy(siteConfig, siteOverlays[loc]);
}

export function localizeCourses(locale: string): Course[] {
  const loc = localeOf(locale);
  if (loc === "en") {
    return courses;
  }
  const overlay = courseOverlays[loc];
  return courses.map((course) => mergeCopy(course, overlay[course.slug]));
}

export function localizeServices(locale: string): Service[] {
  const loc = localeOf(locale);
  if (loc === "en") {
    return services;
  }
  const overlay = serviceOverlays[loc];
  return services.map((service) => mergeCopy(service, overlay[service.slug]));
}

export function localizePosts(locale: string): Post[] {
  const loc = localeOf(locale);
  if (loc === "en") {
    return posts;
  }
  const overlay = postOverlays[loc];
  return posts.map((post) => mergeCopy(post, overlay[post.slug]));
}

export function getLocalizedContent(locale: string) {
  return {
    site: localizeSite(locale),
    courses: localizeCourses(locale),
    services: localizeServices(locale),
    posts: localizePosts(locale),
  };
}
