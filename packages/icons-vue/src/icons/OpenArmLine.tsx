// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OpenArmLineSvg from '@airclass/icons-svg/lib/asn/OpenArmLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpenArmLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OpenArmLineSvg}></AntdIcon>;
};

OpenArmLine.displayName = 'OpenArmLine';
OpenArmLine.inheritAttrs = false;
export default OpenArmLine;