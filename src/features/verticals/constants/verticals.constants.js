import { COMING_SOON_PATH } from "@/lib/site";

export const VERTICALS_PATH = "/verticals";

export const VERTICALS_BANNER =
  "/assets/images/spsimg/verticles/v1.webp";

export const COUNTY_GOVERNMENT_PATH =
  "/verticals/public-sector/county-government";

export const COUNTY_BANNER =
  "/assets/images/public-sector/govt.webp";


export const VERTICAL_IMAGES = {
  publicSector: {
    family: "/assets/images/spsimg/verticles/v1.webp",
    government: "/assets/images/public-sector/govt3.webp",
    countyGovernment: "/assets/images/public-sector/govt.webp",
    publicSafety: "/assets/images/public-sector/public_safety.webp",
    education: "/assets/images/public-sector/tab7.webp",
    healthcare: "/assets/images/spsimg/verticles/v3.webp",
  },

  industrials: {
    family: "/assets/images/spsimg/verticles/v2.webp",
    manufacturing: "/assets/images/public-sector/tab7.webp",
    textile: "/assets/images/spsimg/verticles/v2.webp",
    transportation: "/assets/images/spsimg/verticles/v2.webp",
    utilities: "/assets/images/spsimg/verticles/v5.webp",
  },

  healthcare: {
    family: "/assets/images/spsimg/verticles/v3.webp",
    telehealth: "/assets/images/spsimg/verticles/v3.webp",
    multiClinicConsolidation: "/assets/images/spsimg/verticles/v3.webp",
    complianceRequirements: "/assets/images/spsimg/verticles/v3.webp",
    patientExperience: "/assets/images/spsimg/verticles/v3.webp",
    healthSystemsInteroperability:
      "/assets/images/spsimg/verticles/v3.webp",
    retail: "/assets/images/spsimg/verticles/v3.webp",
  },

  retail: {
    family: "/assets/images/spsimg/verticles/v4.webp",
    retail: "/assets/images/spsimg/verticles/v4.webp",
    supplyChain: "/assets/images/spsimg/verticles/v4.webp",
    marketingMerchandising:
      "/assets/images/spsimg/verticles/v4.webp",
    personalizationLocalization:
      "/assets/images/spsimg/verticles/v4.webp",
    omniChannelOperations:
      "/assets/images/spsimg/verticles/v4.webp",
    convenienceStores:
      "/assets/images/spsimg/verticles/v4.webp",
  },

  energy: {
    family: "/assets/images/spsimg/verticles/v5.webp",
    electric: "/assets/images/spsimg/verticles/v5.webp",
    oilGas: "/assets/images/spsimg/verticles/v5.webp",
  },

  financial: {
    family: "/assets/images/spsimg/verticles/v6.webp",
    banking: "/assets/images/spsimg/verticles/v6.webp",
    insurance: "/assets/images/spsimg/verticles/v6.webp",
  },

  telecommunications: {
    family: "/assets/images/spsimg/verticles/v7.webp",
    telcos: "/assets/images/spsimg/verticles/v7.webp",
  },

  products: {
    educationFischerIdentity:
      "/assets/images/public-sector/fischer-identity.webp",

    manufacturingIbm:
      "/assets/images/industrials/ibm.webp",
  },
};


/* Common Service Links*/
export const VERTICAL_SERVICE_TABS = {
  cybersecurity: {
    networkVisibility:
      "/services/network-security/network-visibility-operations-services",

    securityManagementJumpStart:
      "/services/smaas",

    securityManagementAsAService:
      "/services/smaas/service-management-as-a-service",
  },

  cloud: {
    migrateVmware:
      "/services/migration-services",

    migrateIbmPower:
      "/services/migration-services/application-data-migration",

    cloudApplicationDevelopment:
      "/services/devops/cloud-application-development",

    itOpsSupport:
      "/services/devops/it-ops-and-support",
  },

  aiAutomation: {
    dataAnalytics:
      "/services/data-science/data-analytics",

    conversationalAi:
      "/services/chatbots/chatbots-virtual-assistants",

    dataManagement:
      "/services/data-science",
  },

  collaboration: {
    events: COMING_SOON_PATH,
  },

  spinnlabs: {
    startup: COMING_SOON_PATH,
  },
};