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
};
