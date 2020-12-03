// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpaceShipLineSvg from '@airclass/icons-svg/lib/asn/SpaceShipLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpaceShipLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpaceShipLineSvg}></AntdIcon>;
};

SpaceShipLine.displayName = 'SpaceShipLine';
SpaceShipLine.inheritAttrs = false;
export default SpaceShipLine;