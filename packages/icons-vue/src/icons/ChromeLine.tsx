// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChromeLineSvg from '@airclass/icons-svg/lib/asn/ChromeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChromeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeLineSvg}></AntdIcon>;
};

ChromeLine.displayName = 'ChromeLine';
ChromeLine.inheritAttrs = false;
export default ChromeLine;