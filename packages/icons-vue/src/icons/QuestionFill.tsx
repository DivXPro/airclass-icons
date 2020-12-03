// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuestionFillSvg from '@airclass/icons-svg/lib/asn/QuestionFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionFillSvg}></AntdIcon>;
};

QuestionFill.displayName = 'QuestionFill';
QuestionFill.inheritAttrs = false;
export default QuestionFill;