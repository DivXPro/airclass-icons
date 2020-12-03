// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PantoneFillSvg from '@airclass/icons-svg/lib/asn/PantoneFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PantoneFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PantoneFillSvg}></AntdIcon>;
};

PantoneFill.displayName = 'PantoneFill';
PantoneFill.inheritAttrs = false;
export default PantoneFill;