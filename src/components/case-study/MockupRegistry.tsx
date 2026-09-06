import { ReactNode } from "react";
import {
  SessionListMockup,
  DenominationMockup,
  AuditTrailMockup,
} from "@/components/case-study/mockups/CashSessionsMockups";
import {
  CurrencyLockedMockup,
  CurrencyDisabledMockup,
  CurrencySweepMockup,
} from "@/components/case-study/mockups/MultiCurrencyMockups";
import {
  DimeDashboardMockup,
  DimeCategoriesMockup,
  DimeImportMockup,
} from "@/components/case-study/mockups/DimeMockups";
import {
  NoSessionMockup,
  InconsistentCurrencyMockup,
  GenericTrackerMockup,
  PlacardMockup,
  InconsistentAppMockup,
  LedgerMockup,
} from "@/components/case-study/mockups/BeforeMockups";
import {
  MyraAfterMockup,
  ARCameraMockup,
  ARestroAfterMockup,
} from "@/components/case-study/mockups/AfterMockups";

export const mockupRegistry: Record<string, ReactNode> = {
  "cash-sessions-list": <SessionListMockup />,
  "cash-sessions-denomination": <DenominationMockup />,
  "cash-sessions-audit": <AuditTrailMockup />,
  "currency-locked": <CurrencyLockedMockup />,
  "currency-disabled": <CurrencyDisabledMockup />,
  "currency-sweep": <CurrencySweepMockup />,
  "dime-dashboard": <DimeDashboardMockup />,
  "dime-categories": <DimeCategoriesMockup />,
  "dime-import": <DimeImportMockup />,
  "before-no-session": <NoSessionMockup />,
  "before-inconsistent-currency": <InconsistentCurrencyMockup />,
  "before-generic-tracker": <GenericTrackerMockup />,
  "before-placard": <PlacardMockup />,
  "before-inconsistent-app": <InconsistentAppMockup />,
  "before-ledger": <LedgerMockup />,
  "after-myra": <MyraAfterMockup />,
  "after-ar-camera": <ARCameraMockup />,
  "after-arestro": <ARestroAfterMockup />,
};
