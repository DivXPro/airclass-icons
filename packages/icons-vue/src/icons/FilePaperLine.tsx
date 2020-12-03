// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilePaperLineSvg from '@airclass/icons-svg/lib/asn/FilePaperLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePaperLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilePaperLineSvg}></AntdIcon>;
};

FilePaperLine.displayName = 'FilePaperLine';
FilePaperLine.inheritAttrs = false;
export default FilePaperLine;