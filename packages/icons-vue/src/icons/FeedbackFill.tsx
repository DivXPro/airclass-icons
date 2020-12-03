// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FeedbackFillSvg from '@airclass/icons-svg/lib/asn/FeedbackFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FeedbackFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FeedbackFillSvg}></AntdIcon>;
};

FeedbackFill.displayName = 'FeedbackFill';
FeedbackFill.inheritAttrs = false;
export default FeedbackFill;