// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QuestionnaireLineSvg from '@airclass/icons-svg/lib/asn/QuestionnaireLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionnaireLine = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QuestionnaireLineSvg} />;

QuestionnaireLine.displayName = 'QuestionnaireLine';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(QuestionnaireLine);