// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PantoneLineSvg from '@airclass/icons-svg/lib/asn/PantoneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PantoneLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PantoneLineSvg}></AntdIcon>;
};

PantoneLine.displayName = 'PantoneLine';
PantoneLine.inheritAttrs = false;
export default PantoneLine;