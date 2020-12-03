// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuestionnaireFillSvg from '@airclass/icons-svg/lib/asn/QuestionnaireFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionnaireFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionnaireFillSvg}></AntdIcon>;
};

QuestionnaireFill.displayName = 'QuestionnaireFill';
QuestionnaireFill.inheritAttrs = false;
export default QuestionnaireFill;