// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StrikethroughSvg from '@airclass/icons-svg/lib/asn/Strikethrough';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Strikethrough = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StrikethroughSvg}></AntdIcon>;
};

Strikethrough.displayName = 'Strikethrough';
Strikethrough.inheritAttrs = false;
export default Strikethrough;