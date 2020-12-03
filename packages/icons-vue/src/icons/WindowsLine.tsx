// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WindowsLineSvg from '@airclass/icons-svg/lib/asn/WindowsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WindowsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindowsLineSvg}></AntdIcon>;
};

WindowsLine.displayName = 'WindowsLine';
WindowsLine.inheritAttrs = false;
export default WindowsLine;