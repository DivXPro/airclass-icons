// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WindowLineSvg from '@airclass/icons-svg/lib/asn/WindowLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WindowLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindowLineSvg}></AntdIcon>;
};

WindowLine.displayName = 'WindowLine';
WindowLine.inheritAttrs = false;
export default WindowLine;