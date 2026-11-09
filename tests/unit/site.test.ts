import { describe, expect, it } from "vitest";
import { courses } from "@/content/courses";
import { services } from "@/content/services";
import { siteConfig } from "@/config/site";

describe("site config", () => {
  it("uses live tchrists.com company details", () => {
    expect(siteConfig.brandName).toBe("TchristsFoM");
    expect(siteConfig.legalName).toBe("TchristsFoM International Consultants LLC");
    expect(siteConfig.contact.email).toBe("info@tchrists.com");
    expect(siteConfig.contact.emailCc).toBe("johnsond@tchrists.com");
    expect(siteConfig.contact.mailto).toBe(
      "mailto:info@tchrists.com?cc=johnsond@tchrists.com",
    );
    expect(siteConfig.contact.whatsapp).toBe("https://wa.me/919400782260");
    expect(siteConfig.rabga.coursesUrl).toBe("https://rabga.co.uk/our-courses/");
    expect(siteConfig.contact.emails).toContain("johnsond@tchrists.com");
    expect(siteConfig.contact.addresses[0]?.lines.join(" ")).toMatch(
      /Sharjah Media City/,
    );
    expect(siteConfig.contact.addresses[1]?.lines.join(" ")).toMatch(
      /Behind Sacred Heart Church/,
    );
    expect(siteConfig.contact.addresses[1]?.lines.join(" ")).toMatch(/Thrissur 680306/);
    expect(siteConfig.regions).toEqual(["UK, GCC & MENA region"]);
    expect(siteConfig.home.eyebrow).toBe("UK, GCC & MENA region");
    expect(siteConfig.contact.offices).toBe("UK, GCC & MENA region");
    expect(siteConfig.experienceYears).toBe(33);
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
    expect(services.map((service) => service.slug)).toContain(
      "cpd-wellness-trainers-training-academy",
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
