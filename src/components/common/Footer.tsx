import stackOverflow from '/stack-overflow.svg';
import github from '/github.svg';
import linkedin from '/linkedin.svg';
import { ClassNameType } from '../../typings';

interface FooterProps {
  className?: ClassNameType;
}

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={
        'footer footer-center bg-success text-base-100 bottom-0 ' + className
      }
    >
      <aside>
        <p>
          Created by{' '}
          <a
            href="https://github.com/pradeexsu"
            className="link link-secondary"
            target="_blank"
          >
            Pradeep Suthar
          </a>
          <span className="flex gap-4 justify-center select-none mt-4 ">
            <a href="https://github.com/pradeexsu" target="_blank">
              <img src={github} className="h-7" />
            </a>
            <a href="https://linkedin.com/in/pradeep-swe" target="_blank">
              <img src={linkedin} className="h-7" />
            </a>
            <a
              href="https://stackoverflow.com/users/12537691/pradeexsu"
              target="_blank"
            >
              <img src={stackOverflow} className="h-8" />
            </a>
          </span>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
