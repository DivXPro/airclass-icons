// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookOpenLineSvg from '@airclass/icons-svg/lib/asn/BookOpenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookOpenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookOpenLineSvg}></AntdIcon>;
};

BookOpenLine.displayName = 'BookOpenLine';
BookOpenLine.inheritAttrs = false;
export default BookOpenLine;