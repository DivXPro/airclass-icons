// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FormatClearSvg from '@airclass/icons-svg/lib/asn/FormatClear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FormatClear = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatClearSvg}></AntdIcon>;
};

FormatClear.displayName = 'FormatClear';
FormatClear.inheritAttrs = false;
export default FormatClear;