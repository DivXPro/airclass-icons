// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpaceShipFillSvg from '@airclass/icons-svg/lib/asn/SpaceShipFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpaceShipFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpaceShipFillSvg}></AntdIcon>;
};

SpaceShipFill.displayName = 'SpaceShipFill';
SpaceShipFill.inheritAttrs = false;
export default SpaceShipFill;