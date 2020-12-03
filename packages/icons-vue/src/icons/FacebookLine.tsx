// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FacebookLineSvg from '@airclass/icons-svg/lib/asn/FacebookLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FacebookLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FacebookLineSvg}></AntdIcon>;
};

FacebookLine.displayName = 'FacebookLine';
FacebookLine.inheritAttrs = false;
export default FacebookLine;