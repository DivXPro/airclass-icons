// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuestionMarkSvg from '@airclass/icons-svg/lib/asn/QuestionMark';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionMark = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionMarkSvg}></AntdIcon>;
};

QuestionMark.displayName = 'QuestionMark';
QuestionMark.inheritAttrs = false;
export default QuestionMark;