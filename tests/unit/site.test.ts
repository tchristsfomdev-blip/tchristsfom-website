import { describe, expect, it } from "vitest";
import { courses } from "@/content/courses";
import { services } from "@/content/services";
import { siteConfig } from "@/config/site";

describe("site config", () => {
  it("uses live tchrists.com company details", () => {
    expect(siteConfig.brandName).toBe("TchristsFoM");
    expect(siteConfig.legalName).toBe("TchristsFoM International Consultants LLC");
    expect(siteConfig.contact.email).toBe("info@tchrists.com");
    expect(siteConfig.contact.emails).toContain("johnsond@tchrists.com");
    expect(siteConfig.contact.addressLines.join(" ")).toMatch(/Sharjah Media City/);
    expect(siteConfig.regions).toEqual(
      expect.arrayContaining(["UK", "UAE", "India", "Iraq", "Qatar", "KSA"]),
    );
    expect(siteConfig.experienceYears).toBe(31);
    expect(siteConfig.tagline).not.toMatch(/Empowring|Empoweriing/);
  });

  it("keeps about, services, courses and contact in primary navigation", () => {
    const hrefs = siteConfig.nav.map((item) => item.href);
    expect(hrefs).toEqual(
      expect.arrayContaining(["/about", "/services", "/courses", "/contact"]),
    );
    expect(siteConfig.cta.href).toBe("/contact");
  });

  it("gives every shell page a unique description", () => {
    const descriptions = [
      siteConfig.description,
      siteConfig.pages.about.description,
      siteConfig.pages.services.description,
      siteConfig.pages.courses.description,
      siteConfig.pages.contact.description,
      siteConfig.pages.privacy.description,
      siteConfig.pages.terms.description,
    ];

    expect(new Set(descriptions).size).toBe(descriptions.length);
  });
});

describe("services and courses", () => {
  it("publishes consultancy services from the live site", () => {
    expect(services.length).toBeGreaterThanOrEqual(7);
    expect(services.map((service) => service.slug)).toContain(
      "corporate-leadership-academy",
    );
    expect(services.map((service) => service.slug)).toContain(
      "v-chro-5p-process-outsourcing",
    );
  });

  it("publishes six unique course slugs without invented prices", () => {
    expect(courses).toHaveLength(6);
    for (const course of courses) {
      expect(course.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(course.shortDescription).not.toMatch(/£|\$\d|\bprice\b/i);
    }
  });
});
