// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SurveyFillSvg from '@airclass/icons-svg/lib/asn/SurveyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SurveyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SurveyFillSvg}></AntdIcon>;
};

SurveyFill.displayName = 'SurveyFill';
SurveyFill.inheritAttrs = false;
export default SurveyFill;