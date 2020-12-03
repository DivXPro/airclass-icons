// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ToggleLineSvg from '@airclass/icons-svg/lib/asn/ToggleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToggleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToggleLineSvg}></AntdIcon>;
};

ToggleLine.displayName = 'ToggleLine';
ToggleLine.inheritAttrs = false;
export default ToggleLine;