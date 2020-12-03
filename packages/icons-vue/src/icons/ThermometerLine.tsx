// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ThermometerLineSvg from '@airclass/icons-svg/lib/asn/ThermometerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThermometerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThermometerLineSvg}></AntdIcon>;
};

ThermometerLine.displayName = 'ThermometerLine';
ThermometerLine.inheritAttrs = false;
export default ThermometerLine;