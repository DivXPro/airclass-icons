// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GoogleLineSvg from '@airclass/icons-svg/lib/asn/GoogleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoogleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GoogleLineSvg}></AntdIcon>;
};

GoogleLine.displayName = 'GoogleLine';
GoogleLine.inheritAttrs = false;
export default GoogleLine;