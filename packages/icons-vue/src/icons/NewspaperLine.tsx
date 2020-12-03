// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NewspaperLineSvg from '@airclass/icons-svg/lib/asn/NewspaperLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NewspaperLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NewspaperLineSvg}></AntdIcon>;
};

NewspaperLine.displayName = 'NewspaperLine';
NewspaperLine.inheritAttrs = false;
export default NewspaperLine;