// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuillPenFillSvg from '@airclass/icons-svg/lib/asn/QuillPenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuillPenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuillPenFillSvg}></AntdIcon>;
};

QuillPenFill.displayName = 'QuillPenFill';
QuillPenFill.inheritAttrs = false;
export default QuillPenFill;