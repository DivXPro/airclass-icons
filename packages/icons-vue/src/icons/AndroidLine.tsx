// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AndroidLineSvg from '@airclass/icons-svg/lib/asn/AndroidLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AndroidLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AndroidLineSvg}></AntdIcon>;
};

AndroidLine.displayName = 'AndroidLine';
AndroidLine.inheritAttrs = false;
export default AndroidLine;