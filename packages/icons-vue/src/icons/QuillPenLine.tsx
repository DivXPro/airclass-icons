// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuillPenLineSvg from '@airclass/icons-svg/lib/asn/QuillPenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuillPenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuillPenLineSvg}></AntdIcon>;
};

QuillPenLine.displayName = 'QuillPenLine';
QuillPenLine.inheritAttrs = false;
export default QuillPenLine;