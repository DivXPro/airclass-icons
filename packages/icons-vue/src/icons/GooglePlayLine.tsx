// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GooglePlayLineSvg from '@airclass/icons-svg/lib/asn/GooglePlayLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GooglePlayLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GooglePlayLineSvg}></AntdIcon>;
};

GooglePlayLine.displayName = 'GooglePlayLine';
GooglePlayLine.inheritAttrs = false;
export default GooglePlayLine;