// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BaseStationFillSvg from '@airclass/icons-svg/lib/asn/BaseStationFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BaseStationFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BaseStationFillSvg}></AntdIcon>;
};

BaseStationFill.displayName = 'BaseStationFill';
BaseStationFill.inheritAttrs = false;
export default BaseStationFill;