import { BatchSerialMockup } from "./illustrations/BatchSerialMockup";
import { LoginRedesignMockup } from "./illustrations/LoginRedesignMockup";
import { PermissionsMockup } from "./illustrations/PermissionsMockup";
import { ARestroMockup } from "./illustrations/ARestroMockup";
import { MyraMockup } from "./illustrations/MyraMockup";

export const mockupRegistry: Record<string, React.ComponentType> = {
  BatchSerialMockup,
  LoginRedesignMockup,
  PermissionsMockup,
  ARestroMockup,
  MyraMockup,
};

export function ProjectMockup({ name }: { name: string }) {
  const Component = mockupRegistry[name];
  if (!Component) return null;
  return <Component />;
}
