// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NavigationLineSvg from '@airclass/icons-svg/lib/asn/NavigationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NavigationLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NavigationLineSvg}></AntdIcon>;
};

NavigationLine.displayName = 'NavigationLine';
NavigationLine.inheritAttrs = false;
export default NavigationLine;